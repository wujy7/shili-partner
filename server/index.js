
import instance from './request.js';

export function Index(data = {}) {
	return instance({
		method: 'GET',
		url: '/sockjs-node/info?t=1730903817382',
		data,
	});
}
export function Index2(data = {}) {
	return instance({
		method: 'POST',
		url: 'Other/getdata',
		data,
	});
}