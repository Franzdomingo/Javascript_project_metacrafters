/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

// Step 1: Define an array to store NFTs
let nftCollection = [];

function mintNFT(name, eyeColor, shirtType, skintone, bling) {
   // NFT metadata object
   const nft = {
       name: name,
       eyeColor: eyeColor,
       shirtType: shirtType,
       skintone: skintone,
       bling: bling
   };
   
   // Add NFT to the collection
   nftCollection.push(nft);
   
   console.log(`Minted NFT: ${nft.name}`);
}
// Step 3: Function to list all NFTs
function listNFTs() {
   nftCollection.forEach((nft, index) => {
       console.log(`ID: ${index + 1}`);
       console.log(`Name: ${nft.name}`);
       console.log(`Eye Color: ${nft.eyeColor}`);
       console.log(`Shirt Type: ${nft.shirtType}`);
       console.log(`Skin Tone: ${nft.skintone}`);
       console.log(`Bling: ${nft.bling}`);
       console.log('-------------------------');
   });
}

// Step 4: Function to get the total supply of NFTs
function getTotalSupply() {
   console.log(`Total NFT Supply: ${nftCollection.length}`);
   return nftCollection.length;
}
// Mint 3 NFTs
mintNFT("Alice", "Green", "T-shirt", "Brown", "Silver necklace");
mintNFT("Bob", "Blue", "Hoodie","Light", "Gold chain");
mintNFT("Charlie", "Brown", "Sweater", "Dark", "Diamond ring");

// List all NFTs
listNFTs();

// Get total supply
getTotalSupply();
// call your functions below this line

