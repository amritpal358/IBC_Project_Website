pragma solidity ^0.6.0;

contract Charity{

struct NGO{
    string ngo_name;
    uint ngo_ID;
    address payable ngo_address;
}
struct Donator {
    uint Donor_ID;
    string Donor_name;
    address payable donor_Address;

    }
mapping(uint=>NGO) public NGOs;
address payable d_Address;
mapping(uint=>Donator) private donators;
Donator d;

function new_donor(uint _id, string memory _name ,address payable _donor) public{
        donators[_id] = Donator(_id,_name,  _donor);
    }

function new_ngo(uint _id,string memory _a,address payable _ngo) public{
    NGOs[_id]=NGO(_a,_id,_ngo);
}

function getuserbal()public view returns(uint){
    return msg.sender.balance;}
}