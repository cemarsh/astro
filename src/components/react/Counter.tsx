import { useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div className="rounded-lg border border-blue-500 bg-blue-500/10 p-6">
			<div className="mb-4 flex items-center gap-2">
				<span className="rounded bg-blue-500 px-2 py-1 text-xs font-bold text-white">React</span>
				<span className="text-slate-400">useState Hook</span>
			</div>
			<p className="mb-4 text-4xl font-bold text-blue-400">{count}</p>
			<div className="flex gap-2">
				<button
					onClick={() => setCount(count - 1)}
					className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
				>
					-1
				</button>
				<button
					onClick={() => setCount(count + 1)}
					className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
				>
					+1
				</button>
				<button
					onClick={() => setCount(0)}
					className="rounded border border-blue-500 px-4 py-2 font-medium text-blue-400 hover:bg-blue-500/20"
				>
					Reset
				</button>
			</div>
		</div>
	);
}
