import axios from "axios";
import Qs from "qs"; //application/x-www-form-urlencoded这种请求头格式，需要使用qs库

const Axios = axios.create({
	baseURL: '',
	timeout: 1000,
});

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	return config;
}, function (error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
	// 对响应数据做点什么
	switch (response.status) {
		case 200:
			console.log("获取成功");
			break;
		case 400:
			console.log("语法错误，服务器无法理解");
			break;
		case 401:
			console.log("用户身份认证，可能是未登录");
			break;
		case 404:
			console.log("页面找不到");
			break;
		case 500:
			console.log("服务器错误");
			break;
		default:
			break;
	}
	return response;
}, function (error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});

//封装axios接口

function _http(obj) {

	let option = {
		url: obj.url,
		method: obj.method || "get",
		headers: {
			"Content-Type": 'application/json', //具体看后端给的请求头格式 "application/json"默认
			"X-Authorization-With": localStorage.getItem('token') //登录后获取token
		}
	};

	if (obj.headers) {
		Object.assign(option, {
			headers: obj.headers,
		});
	}

	if (obj.method === "get" || obj.method === "GET") {
		Object.assign(option, {
			params: obj.data
		});
	} else {
		if (option.headers["Content-Type"] === "application/x-www-form-urlencoded") {
			Object.assign(option, {
				data: Qs.stringify(obj.data)
			});
		} else {
			Object.assign(option, {
				data: obj.data
			});
		}
	}
	return Axios(option);
}
export default _http;