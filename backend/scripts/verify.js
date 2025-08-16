const { run } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  // Get network information
  const network = await ethers.provider.getNetwork();
  const networkName = network.name;
  const chainId = Number(network.chainId);

  console.log(`Verifying contract on ${networkName} (Chain ID: ${chainId})`);

  // Load deployment information
  const deploymentFile = path.join(__dirname, "..", "deployments", `${networkName}-${chainId}.json`);
  
  if (!fs.existsSync(deploymentFile)) {
    console.error(`Deployment file not found: ${deploymentFile}`);
    console.error("Please deploy the contract first using: npm run deploy");
    process.exit(1);
  }

  const deploymentInfo = JSON.parse(fs.readFileSync(deploymentFile, "utf8"));
  const contractAddress = deploymentInfo.contractAddress;

  console.log(`Contract address: ${contractAddress}`);

  try {
    // Verify the contract
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: [], // QuickGame contract has no constructor arguments
    });

    console.log("Contract verified successfully!");
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Contract is already verified!");
    } else {
      console.error("Verification failed:", error);
      process.exit(1);
    }
  }
}

main()
  .then(() => {
    console.log("Verification completed!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Verification failed:", error);
    process.exit(1);
  });
