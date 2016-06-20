import { httper } from '../utils';

export const increment = ({ dispatch }) => dispatch('INCREMENT')
export const decrement = ({ dispatch }) => dispatch('DECREMENT')
export const saveUser = ({dispatch}, user) => dispatch('SAVEUSER', user)
export const loginShow = ({dispatch}, isshow) => {
	dispatch("LOGINSHOW", isshow);
}
export const logout = ({dispatch}) => {
	httper("/php/user/logout").then((response) => {
		dispatch("LOGOUT");
		window.location.href="/";
	})
}
export const hotList = ({dispatch}) => {
	httper("/php/home/hotlive").then((response) => {
		if(response.data.code == 0) dispatch("HOTINDEXLIST", response.data.data);
	})
}
export const hotContentList = ({dispatch}) => {
	httper("/php/home/getAllLives").then((response) => {
		if(response.data.code == 0) dispatch("HOTCONTENTLIST", response.data.data);
	})
}
export const dayRankForAnchor = ({dispatch}) => {
	httper("/php/ranklist/dayRankForAnchor").then((response) => {
		if(response.data.code == 0) dispatch("DAYRANKFORANCHOR", response.data.data);
	})
}
export const dayRankForRicher = ({dispatch}) => {
	httper("/php/ranklist/dayRankForRicher").then((response) => {
		if(response.data.code == 0) dispatch("DAYRANKFORRICHER", response.data.data);
	})
}
export const weekRankForAnchor = ({dispatch}) => {
	httper("/php/ranklist/weekRankForAnchor").then((response) => {
		if(response.data.code == 0) dispatch("WEEKRANKFORANCHOR", response.data.data);
	})
}
export const weekRankForRicher = ({dispatch}) => {
	httper("/php/ranklist/weekRankForRicher").then((response) => {
		if(response.data.code == 0) dispatch("WEEKRANKFORRICHER", response.data.data);
	})
}
export const monthRankForAnchor = ({dispatch}) => {
	httper("/php/ranklist/monthRankForAnchor").then((response) => {
		if(response.data.code == 0) dispatch("MONTHRANKFORANCHOR", response.data.data);
	})
}
export const monthRankForRicher = ({dispatch}) => {
	httper("/php/ranklist/monthRankForRicher").then((response) => {
		if(response.data.code == 0) dispatch("MONTHRANKFORRICHER", response.data.data);
	})
}

export const changeGift = ({dispatch}, type) => {
	httper(`/php/home/getGiftList?type=${type}`).then((response) => {
		if(response.data.code == 0) dispatch("CHANGEGIFT", response.data.data);
	})
}

export const refreshRoom = ({dispatch}, room_id) => {
	httper(`/php/room/getArtistInfo?room_id=${room_id}`).then((response) => {
		if(response.data.code == 0) dispatch("REFRESHROOM", response.data.data);
	})
}

export const subscribe = ({dispatch}, artist_id) => {
	httper(`/php/Subscribe/dosub?artist_id=${artist_id}`).then((response) => {
		if(response.data.code == 0) dispatch("SUBSCRIBE", response.data.data);
	})
}

export const unsubscribe = ({dispatch}, artist_id) => {
	httper(`/php/Subscribe/undosub?artist_id=${artist_id}`).then((response) => {
		if(response.data.code == 0) dispatch("UNSUBSCRIBE", response.data.data);
	})
}

export const refreshBalance = ({dispatch}, balance) => {
	dispatch("REFRESHBALANCE", balance);
}

export const refreshLivecode = ({dispatch}, room_id, status) => {
	httper(`/php/room/changelivestatus`, { room_id, status }).then((response) => {
		if(response.data.code == 0) {
			httper(`/php/room/getlivecode`, { room_id }).then((res) => {
				if(_.result(res, "data.code") == 0 ) dispatch("REFRESHLIVECODE", _.result(res, "data.data") );
			})
			
		}
	})
}

export const refreshUserInfo = ({dispatch}, user) => {
	dispatch("REFRESHUSERINFO", user);
}