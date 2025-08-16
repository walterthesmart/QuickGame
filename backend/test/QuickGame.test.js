const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("QuickGame", function () {
  let quickGame;
  let owner;
  let player1;
  let player2;
  let addrs;

  const GAME_TYPES = {
    ONE_ROUND: 0,
    BEST_OF_THREE: 1,
    BEST_OF_FIVE: 2,
  };

  const MOVES = {
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3,
  };

  beforeEach(async function () {
    // Get signers
    [owner, player1, player2, ...addrs] = await ethers.getSigners();

    // Deploy the contract
    const QuickGame = await ethers.getContractFactory("QuickGame");
    quickGame = await QuickGame.deploy();
    await quickGame.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await quickGame.owner()).to.equal(owner.address);
    });

    it("Should start with game counter at 0", async function () {
      expect(await quickGame.gameCounter()).to.equal(0);
    });
  });

  describe("Game Creation", function () {
    it("Should create a game with correct parameters", async function () {
      const stake = ethers.parseEther("0.1");
      
      await expect(
        quickGame.connect(player1).createGame(GAME_TYPES.ONE_ROUND, { value: stake })
      )
        .to.emit(quickGame, "GameCreated")
        .withArgs(1, player1.address, stake, GAME_TYPES.ONE_ROUND);

      const game = await quickGame.games(1);
      expect(game.players[0]).to.equal(player1.address);
      expect(game.stake).to.equal(stake);
      expect(game.gameType).to.equal(GAME_TYPES.ONE_ROUND);
      expect(game.isActive).to.be.true;
    });

    it("Should fail to create game with zero stake", async function () {
      await expect(
        quickGame.connect(player1).createGame(GAME_TYPES.ONE_ROUND, { value: 0 })
      ).to.be.revertedWith("Stake must be greater than 0");
    });

    it("Should fail to create game with invalid game type", async function () {
      const stake = ethers.parseEther("0.1");
      
      await expect(
        quickGame.connect(player1).createGame(99, { value: stake })
      ).to.be.revertedWith("Invalid game type");
    });
  });

  describe("Game Joining", function () {
    beforeEach(async function () {
      const stake = ethers.parseEther("0.1");
      await quickGame.connect(player1).createGame(GAME_TYPES.ONE_ROUND, { value: stake });
    });

    it("Should allow player to join game with correct stake", async function () {
      const stake = ethers.parseEther("0.1");
      
      await expect(
        quickGame.connect(player2).joinGame(1, { value: stake })
      )
        .to.emit(quickGame, "GameJoined")
        .withArgs(1, player2.address);

      const game = await quickGame.games(1);
      expect(game.players[1]).to.equal(player2.address);
    });

    it("Should fail to join with incorrect stake", async function () {
      const wrongStake = ethers.parseEther("0.2");
      
      await expect(
        quickGame.connect(player2).joinGame(1, { value: wrongStake })
      ).to.be.revertedWith("Incorrect stake amount");
    });

    it("Should fail to join own game", async function () {
      const stake = ethers.parseEther("0.1");
      
      await expect(
        quickGame.connect(player1).joinGame(1, { value: stake })
      ).to.be.revertedWith("Cannot join your own game");
    });

    it("Should fail to join non-existent game", async function () {
      const stake = ethers.parseEther("0.1");
      
      await expect(
        quickGame.connect(player2).joinGame(999, { value: stake })
      ).to.be.revertedWith("Game does not exist");
    });
  });

  describe("Game Play", function () {
    beforeEach(async function () {
      const stake = ethers.parseEther("0.1");
      await quickGame.connect(player1).createGame(GAME_TYPES.ONE_ROUND, { value: stake });
      await quickGame.connect(player2).joinGame(1, { value: stake });
    });

    it("Should allow players to make moves", async function () {
      await expect(
        quickGame.connect(player1).makeMove(1, MOVES.ROCK)
      )
        .to.emit(quickGame, "PlayerMoved")
        .withArgs(1, player1.address, MOVES.ROCK);

      await expect(
        quickGame.connect(player2).makeMove(1, MOVES.PAPER)
      )
        .to.emit(quickGame, "PlayerMoved")
        .withArgs(1, player2.address, MOVES.PAPER);
    });

    it("Should fail to make invalid move", async function () {
      await expect(
        quickGame.connect(player1).makeMove(1, 0)
      ).to.be.revertedWith("Invalid choice");

      await expect(
        quickGame.connect(player1).makeMove(1, 4)
      ).to.be.revertedWith("Invalid choice");
    });

    it("Should complete one round game and declare winner", async function () {
      // Player1 plays Rock, Player2 plays Paper (Player2 should win)
      await quickGame.connect(player1).makeMove(1, MOVES.ROCK);
      
      await expect(
        quickGame.connect(player2).makeMove(1, MOVES.PAPER)
      )
        .to.emit(quickGame, "RoundPlayed")
        .withArgs(1, 1, MOVES.ROCK, MOVES.PAPER)
        .and.to.emit(quickGame, "GameEnded");

      const game = await quickGame.games(1);
      expect(game.isActive).to.be.false;
      expect(game.scores[1]).to.equal(1); // Player2 should have 1 point
    });
  });

  describe("Game History", function () {
    it("Should return player's game history", async function () {
      const stake = ethers.parseEther("0.1");
      
      // Create and complete a game
      await quickGame.connect(player1).createGame(GAME_TYPES.ONE_ROUND, { value: stake });
      await quickGame.connect(player2).joinGame(1, { value: stake });
      await quickGame.connect(player1).makeMove(1, MOVES.ROCK);
      await quickGame.connect(player2).makeMove(1, MOVES.PAPER);

      const history = await quickGame.getPlayerGames(player1.address);
      expect(history.length).to.equal(1);
      expect(history[0].gameId).to.equal(1);
    });
  });
});
