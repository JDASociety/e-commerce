export default function RegisterPage() {
	return (
		<div>
			<form action="">
				<input type="text" className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"/>
				<input type="email" className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"/>
				<input type="password" className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"/>
				<input type="confirmPassword" className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"/>
				<button>Register</button>
			</form>
		</div>
	)
}
