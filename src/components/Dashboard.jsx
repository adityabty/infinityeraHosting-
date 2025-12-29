import BotCard from "./BotCard";

export default function Dashboard({
  bots,
  setShowDeployModal,
  setShowCreditModal
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl text-white font-bold">My Bots</h1>

        <div className="flex gap-3">
          <button
            onClick={() => setShowCreditModal(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Buy Credits
          </button>

          <button
            onClick={() => setShowDeployModal(true)}
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg"
          >
            Deploy Bot
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
}
