// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Receiver.sol";


contract NftStaker {
    IERC1155 public parentNFT;

    struct Stake {
        uint256 tokenId;
        uint256 rate;
        uint256 timestamp;
        uint amount;
        uint256 reward;
    }

    // not use
    uint256 totalMaintoken;
    uint256 interval;
    uint256 lastTimeStamp;

    uint256 public constant SS = 50;
    uint256 public constant S = 30;
    uint256 public constant A = 15;
    uint256 public constant B = 10;
    uint256 public constant C = 5;

    mapping(uint256 => uint256) public seasonMushSupply;
    mapping(address => uint256) public stealAmount;
    
    uint256 public Curseason = 1;
    //uint256 public stealpossible = 30;

    address owner;

    mapping(address => mapping(uint256 => Stake)) public stakes;
    mapping(uint => address) public stakingList;

    //mapping(address => uint256[]) public TotalNFTbalance;  // balance

    mapping(address => uint256) public rewards;

    event stealevent(uint256 isSuccess);
    event isStealer(uint256 isSteal);
    event viewTotalToken(uint256 result);
    event staketime(uint256 result);


    constructor() {
        parentNFT = IERC1155(0x0fC5025C764cE34df352757e82f7B5c4Df39A836); // Change it to your NFT contract addr
        totalMaintoken = 10000; // if parent contract change init minting, this var must change same
        owner = msg.sender;
    }


    modifier updateReward(address _account) {
        uint seasonTotal = parentNFT.viewSeasonTotalAmount(Curseason);

        uint i = 1;
        for(i=1;i<6;i++){
            stakes[_account][i].reward = stakes[_account][i].rate * (block.timestamp - stakes[_account][i].timestamp) / seasonTotal;
        }

        uint k = 1;
        for(k=1; k<6; k++){
            if(block.timestamp - stakes[_account][k].timestamp > 10){
                stakes[_account][k].reward = 0;
            }
        }
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Permission erR1!");
        _;
    }

    function chargeMaintoken(uint256 _amount) public onlyOwner {
        parentNFT.safeTransferFrom(
            msg.sender,
            address(this),
            0,
            _amount,
            "0x00"
        );
    }

    function mintMushInit(
        address _account,
        uint256 _tokenRate
    ) public onlyOwner {
        parentNFT.mintMush(_account, _tokenRate);
        seasonMushSupply[Curseason] += 1;
    }

    function mintPoisonSporeInit(address _account) public onlyOwner{
        parentNFT.mintPoisonSpore(_account);
    }

    function MushToSpore(
        uint256 _tokenId,
        uint256 _tokenRate
    ) public {
        require(
            parentNFT.balanceOf(msg.sender, _tokenId) > 0,
            "Not have SporeNFT"
        );

        parentNFT._MushToSpore(_tokenId, _tokenRate, msg.sender);
        seasonMushSupply[Curseason] -= 1;
    }

    function SporeToMush(
        uint256 _tokenId,
        uint256 _tokenRate
    ) public {
        require(
            parentNFT.balanceOf(msg.sender, _tokenId) > 0,
            "Not have SporeNFT"
        );

        parentNFT._SporeToMush(_tokenId, _tokenRate, msg.sender);
        seasonMushSupply[Curseason] += 1;
    }

    function stake(uint256 _tokenId, address _account, uint _amount) public onlyOwner {
        
        require(stakes[_account][_tokenId].amount == 0, "unstack require");
        require(
            parentNFT.balanceOf(_account, _tokenId) >= _amount,
            "Not enough token"
        );
        require(_tokenId>=1 && _tokenId<=5, "Not mushroom");

        uint rate = 0;
        if(_tokenId == 1)
            rate = C;
        else if(_tokenId == 2)
            rate = B;
        else if(_tokenId == 3)
            rate = A;
        else if(_tokenId == 4)
            rate = S;
        else if(_tokenId == 5)
            rate = SS;

        parentNFT.safeTransferFrom(
            _account,
            address(this),
            _tokenId,
            _amount,
            "0x00"
        );
      
        stakes[_account][_tokenId] = Stake(_tokenId, rate, block.timestamp, _amount, 0);
    }

    // once unstack take place, All stacking amount withdraw & get reward
    function unstake(address _account, uint _tokenId) public updateReward(_account) onlyOwner {
        require(stakes[_account][_tokenId].amount > 0, "No Stake erR!");

        parentNFT.safeTransferFrom(
            address(this),
            _account,
            _tokenId,
            stakes[_account][_tokenId].amount,
            "0x00"
        );

        getReward(_account, _tokenId); // unstake -> getReward
    }

    // unstake -> getReward
    function getReward(address _account, uint _tokenId) private {
        require(stakes[_account][_tokenId].reward > 0, "No reward erR!");

        uint reward = stakes[_account][_tokenId].reward;
        parentNFT.safeTransferFrom(address(this), _account, 0, reward, "0x00");
        delete stakes[_account][_tokenId];
    }

    function mintStealerNFT(  // minting 하는 걸로 입장료
        address _account
    ) public onlyOwner {
        parentNFT.mintStealer(_account);
    }

    function stealSuccess(
        address _owner,
        address _stealer,
        uint _tokenId
    ) public updateReward(_owner) returns (bool) {
        uint _stealtokenId = 13;
        require(
            parentNFT.balanceOf(_stealer, _stealtokenId) > 0,
            "Not have Stealer Token"
        );

        stealAmount[_stealer] += stakes[_owner][_tokenId].reward / stakes[_owner][_tokenId].amount;
            
        emit stealevent(1);
        return true;
    }

    function stealFail(address _stealer) public {
        parentNFT.burn(_stealer, 13, 1);
        parentNFT.safeTransferFrom(address(this), _stealer, 0, stealAmount[_stealer]/2, "0x00");
    }

    function stealEnd(address _stealer) public {
        parentNFT.safeTransferFrom(address(this), _stealer, 0, stealAmount[_stealer], "0x00");
    }

    function seasonUpdate() public onlyOwner {
        Curseason++;
    }

    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) external returns (bytes4) {
        return
            bytes4(
                keccak256(
                    "onERC1155Received(address,address,uint256,uint256,bytes)"
                )
            );
    }
}

interface IERC1155 {
    function uri(uint256 tokenId) external view returns (string memory);

    function setTokenUri(
        uint256 tokenId,
        uint256 opt
    ) external;

    function setStakeContract(address _contract) external;

    function mintMush(
        address _account,
        uint256 _tokenRate
    ) external;

    function _SporeToMush(
        uint256 _tokenId,
        uint256 _tokenRate,
        address _account
    ) external;

    function _MushToSpore(
        uint256 _tokenId,
        uint256 _tokenRate,
        address _account
    ) external;

     function mintStealer(
        address _account
    ) external;

    function mintPoisonSpore(address _account) external;

    function Poison_SporeToMush(address _account) external;

    function burnPoisonSpore(address _account) external;

    function viewSeasonTotalAmount(uint256 _currentSeason) external view returns (uint256);

    function burn(
        address _account,
        uint256 _tokenId,
        uint256 _amount
    ) external;

    function updateSeason() external;

    function balanceOf(address account, uint256 id)
        external
        view
        returns (uint256);

    function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids)
        external
        view
        returns (uint256[] memory);

    function setApprovalForAll(address operator, bool approved) external;

    function isApprovedForAll(address account, address operator)
        external
        view
        returns (bool);

    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes calldata data
    ) external;

    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] calldata ids,
        uint256[] calldata amounts,
        bytes calldata data
    ) external;
}
