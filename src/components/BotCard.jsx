import { Play, Pause, Trash2 } from "lucide-react";

export default function BotCard({ bot }) {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-xl border border-white border-opacity-20">
      <h3 className="text-xl font-bold text-white">{bot.name}</h3>
      <p className="text-gray-300 text-sm">{bot.repo}</p>
    </div>
  );
}
