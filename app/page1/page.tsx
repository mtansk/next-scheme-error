export default async function page() {
	const a = process.env.ANY;
	console.log(a);
	return (
		<div>
			<h1>Page 1</h1>
		</div>
	);
}
