export function randomRange(under, over) {
	return Math.ceil(Math.random() * (over - under) + under);
}
export function play(item) {
	$('#player').jPlayer('setMedia', {
		mp3: item.file,
	}).jPlayer('play');
}