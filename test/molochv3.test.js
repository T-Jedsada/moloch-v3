const BN = web3.utils.BN

const ModuleRegistry = artifacts.require('./v3/ModuleRegistry')
const Bank = artifacts.require('./v3/BankContract')
const Proposal = artifacts.require('./v3/ProposalContract') // used to test submit proposal return values
const Voting = artifacts.require('./v3/VotingContract') // used to test submit proposal return values

async function setupMolochSmartContracts() {
    const registry = await ModuleRegistry.new();
    const bank = await Bank.new();
    const proposal = await Proposal.new();

    return {registry, bank, proposal};

}

contract('MolochV3', async function (accounts) {
    
    describe('it should be possible to create a dao and register at least one module to it', async function () {
        const {registry, bank, proposal} = await setupMolochSmartContracts();
    });
});