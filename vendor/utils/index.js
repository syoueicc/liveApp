import Vue from "vue";

export const httper = function(url, data=null, method="GET") {
	return Vue.http({
				url: url,
				method: method,
				data: data,
				emulateJSON: true
			})
}