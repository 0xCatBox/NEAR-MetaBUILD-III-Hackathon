// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract token is ERC1155 {
    uint256 public constant MAIN = 0;

    uint256 public MUSHROOM1 = 1;
    uint256 public MUSHROOM2 = 2;
    uint256 public MUSHROOM3 = 3;
    uint256 public MUSHROOM4 = 4;
    uint256 public MUSHROOM5 = 5;

    uint256 public SPORE1 = 6;
    uint256 public SPORE2 = 7;
    uint256 public SPORE3 = 8;
    uint256 public SPORE4 = 9;
    uint256 public SPORE5 = 10;

    uint256 public constant POISONSPORE = 11;
    uint256 public constant POISON = 12;
    uint256 public constant THIEF = 13;


    string[] IpfsUri = [  // need poison image
        "https://ipfs.io/ipfs/QmTifBGad4KVQ2zvE1AiUd2dTh4Y5dpJtBJBXwtnND6uXK?filename=init.json",  // 0
        "https://ipfs.io/ipfs/QmNZxdnaTrrR1UgepoQpXse6DHqBJYRcsFoC5s5XfsQWR2?filename=spore.json",  // 1
        "https://ipfs.io/ipfs/QmREGm7vkC5Fvr7JAGS5bD8mDt82LKWHib2KxZAkk7jzE9?filename=mushroom.json",  // 2
        " ",  // 3 poisonspore
        " ",  // 4 poison
        "https://ipfs.io/ipfs/QmbHrs79ryps265HsELDnUbeGwTQeDP2aXFN4xQ62nJX2X?filename=stealer.josn",  // 5
        " "
    ];


    mapping(uint256 => string) public _uris;
    mapping(uint256 => uint256) public season;

    address owner;
    address public stakeContract;
    uint256 public currentSeason;


    constructor()
        public
        ERC1155("https://ipfs.io/ipfs/QmYUZx4HsTd7R9LLbcn3X9q99fCpUfvQWhKuwoYYAaNHR4")
    {
        currentSeason = 0;
        _mint(msg.sender, MAIN, 10e10, "");
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner || msg.sender == stakeContract,
            "Permission erR0!"
        );
        _;
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        return (_uris[tokenId]);
    }

    function setTokenUri(
        uint256 tokenId,
        uint256 opt
    ) public onlyOwner {
        _uris[tokenId] = IpfsUri[opt];
    }

    function setStakeContract(address _contract) public onlyOwner {
        stakeContract = _contract;
    }
    

   
    function mintMush(
        address _account,
        uint256 _tokenRate
    ) public onlyOwner {
        uint tokenId = MUSHROOM1;
        _mint(_account, tokenId, 1, "");
        setTokenUri(tokenId, 0);

        season[currentSeason]++;
    }

    function _MushToSpore(
        uint256 _tokenId,
        uint256 _tokenRate,
        address _account
    ) public {
        require(balanceOf(_account, _tokenId) > 0 && _tokenId<=5 && _tokenId>=1, "not Mushroom");
        require(balanceOf(_account, 0) >= 50, "Not enough MAin token");  // 50 change
        _burn(_account, _tokenId, 1);

        uint NewTokenId = 0;
        if(_tokenRate == 50)
            NewTokenId = SPORE5;
        else if(_tokenRate == 30)
            NewTokenId = SPORE4;
        else if(_tokenRate == 15)
            NewTokenId = SPORE3;
        else if(_tokenRate == 10)
            NewTokenId = SPORE2;
        else if(_tokenRate == 5)
            NewTokenId = SPORE1;

        _mint(_account, NewTokenId, 2, "");
        season[currentSeason]-=2;
        setTokenUri(NewTokenId, 1); 
    }

    function _SporeToMush(
        uint256 _tokenId,
        uint256 _tokenRate,
        address _account
    ) public {
        require(balanceOf(_account, _tokenId) > 0 && _tokenId>=6 && _tokenId<=10, "not Spore");

        _burn(_account, _tokenId, 1);

        uint NewTokenId = 0;
        if(_tokenRate == 50)
            NewTokenId = MUSHROOM5;
        else if(_tokenRate == 30)
            NewTokenId = MUSHROOM4;
        else if(_tokenRate == 15)
            NewTokenId = MUSHROOM3;
        else if(_tokenRate == 10)
            NewTokenId = MUSHROOM2;
        else if(_tokenRate == 5)
            NewTokenId = MUSHROOM1;
        else
            NewTokenId = 12;

        _mint(_account, NewTokenId, 1, "");
        season[currentSeason]++;
        setTokenUri(NewTokenId, 2); 
    }

    function mintStealer(address _account) public onlyOwner {
        require(balanceOf(_account, 0) > 10, "Not enough Main token"); // 10 is price
        _burn(_account, 0, 10);

        uint tokenId = THIEF;

        _mint(_account, tokenId, 1, "");
        setTokenUri(tokenId, 5);
    }

    function mintPoisonSpore(address _account) public onlyOwner {
        require(balanceOf(_account, POISONSPORE) == 0, "already mint poison");

        _mint(_account, POISONSPORE, 1, "");
        setTokenUri(POISONSPORE, 3);
    }

    function Poison_SporeToMush(address _account) public {
        require(balanceOf(_account, POISONSPORE) > 0, "No Poison spore");

        _burn(_account, POISONSPORE, 1);
        _mint(_account, POISON, 1, "");
        setTokenUri(POISONSPORE, 4);
    }



    function burnPoisonSpore(address _account) public onlyOwner {
        require(balanceOf(_account, POISONSPORE)>0, "no poison");

        uint balance = balanceOf(_account, POISONSPORE);
        _burn(_account, POISONSPORE, balance);
    }


    function viewSeasonTotalAmount(uint256 _currentSeason) public view returns (uint256) {
        return season[_currentSeason];
    }

    function updateSeason() public onlyOwner {
        currentSeason++;
    }

    function burn(
        address _account,
        uint256 _tokenId,
        uint256 _amount
    ) public {
        _burn(_account, _tokenId, _amount);
    }

}
