// Step 1: Define an array to store NFTs
let nftCollection = [];

function mintNFT(name, eyeColor, shirtType, skintone, bling, accessories) {
   // NFT metadata object
   const nft = {
       name: name,
       eyeColor: eyeColor,
       shirtType: shirtType,
       skintone: skintone,
       bling: bling,
       accessories: accessories
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
       console.log(`Acessories: ${nft.accessories}`);
       console.log('-------------------------');
   });
}

// Step 4: Function to get the total supply of NFTs
function getTotalSupply() {
   console.log(`Total NFT Supply: ${nftCollection.length}`);
   return nftCollection.length;
}
// Mint 3 NFTs
mintNFT("Franz", "White", "Sando", "Brown", "Ruby necklace", "Magic Wand");
mintNFT("Kyla", "Blue", "Hoodie","Light", "Gold Bars", "Divine Rapier sword");
mintNFT("Caila", "Brown", "Sweater", "Dark", "Diamond ring", "Rifle Gun");

// List all NFTs
listNFTs();

// Get total supply
getTotalSupply();
