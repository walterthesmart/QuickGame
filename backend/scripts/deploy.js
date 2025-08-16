const { ethers } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("Starting QuickGame contract deployment...");

  // Get the contract factory
  const QuickGame = await ethers.getContractFactory("QuickGame");

  // Deploy the contract
  console.log("Deploying QuickGame contract...");
  const quickGame = await QuickGame.deploy();

  // Wait for deployment to complete
  await quickGame.waitForDeployment();

  const contractAddress = await quickGame.getAddress();
  console.log(`QuickGame contract deployed to: ${contractAddress}`);

  // Get network information
  const network = await ethers.provider.getNetwork();
  console.log(`Deployed on network: ${network.name} (Chain ID: ${network.chainId})`);

  // Save deployment information
  const deploymentInfo = {
    contractAddress: contractAddress,
    network: network.name,
    chainId: Number(network.chainId),
    deploymentTime: new Date().toISOString(),
    deployer: (await ethers.getSigners())[0].address,
  };

  // Create deployments directory if it doesn't exist
  const deploymentsDir = path.join(__dirname, "..", "deployments");
  if (!fs.existsSync(deploymentsDir)) {
    fs.mkdirSync(deploymentsDir, { recursive: true });
  }

  // Save deployment info to file
  const deploymentFile = path.join(deploymentsDir, `${network.name}-${network.chainId}.json`);
  fs.writeFileSync(deploymentFile, JSON.stringify(deploymentInfo, null, 2));
  console.log(`Deployment info saved to: ${deploymentFile}`);

  // Generate ABI file for frontend
  const artifactPath = path.join(__dirname, "..", "artifacts", "contracts", "QuickGame.sol", "QuickGame.json");
  if (fs.existsSync(artifactPath)) {
    const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
    
    // Create frontend artifacts directory
    const frontendArtifactsDir = path.join(__dirname, "..", "..", "frontend", "src", "contracts");
    if (!fs.existsSync(frontendArtifactsDir)) {
      fs.mkdirSync(frontendArtifactsDir, { recursive: true });
    }

    // Save contract info for frontend
    const contractInfo = {
      contractAddress: contractAddress,
      abi: artifact.abi,
      networkName: network.name,
      chainId: Number(network.chainId),
    };

    const frontendContractFile = path.join(frontendArtifactsDir, `QuickGame-${network.name}.json`);
    fs.writeFileSync(frontendContractFile, JSON.stringify(contractInfo, null, 2));
    console.log(`Contract info for frontend saved to: ${frontendContractFile}`);
  }

  console.log("\nDeployment completed successfully!");
  console.log("Next steps:");
  console.log("1. Verify the contract on the block explorer");
  console.log("2. Update the frontend configuration with the new contract address");
  console.log("3. Test the contract functionality");

  return contractAddress;
}

// Handle errors
main()
  .then((address) => {
    console.log(`\nContract deployed successfully at: ${address}`);
    process.exit(0);
  })
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
