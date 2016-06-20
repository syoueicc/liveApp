import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);

const state = _.assignIn(
	{
		rooURL: window.location.origin
	},
	{
		loginShow: "none"
	},
	{
		hls: null
	},
	{
		hcts: null
	},
	{
		dfa: null
	},
	{
		dfr: null
	},
	{
		wfa: null
	},
	{
		wfr: null
	},
	{
		mfa: null
	},
	{
		mfr: null
	},
	window.__initdata__
);

const mutations = {
	SAVEUSER(state, user) {
		state = _.merge(state, {user})
	},
	LOGINSHOW(state, isshow) {
		state.loginShow = isshow;
	},
	LOGOUT(state) {
		state.user = null;
	},
	HOTINDEXLIST(state, hls) {
		state.hls = hls;
	},
	HOTCONTENTLIST(state, hcts) {
		state.hcts = hcts;
	},
	DAYRANKFORANCHOR(state, dfa) {
		state.dfa = dfa;
	},
	DAYRANKFORRICHER(state, dfr) {
		state.dfr = dfr;
	},
	WEEKRANKFORANCHOR(state, wfa) {
		state.wfa = wfa;
	},
	WEEKRANKFORRICHER(state, wfr) {
		state.wfr = wfr;
	},
	MONTHRANKFORANCHOR(state, mfa) {
		state.mfa = mfa;
	},
	MONTHRANKFORRICHER(state, mfr) {
		state.mfr = mfr;
	},
	CHANGEGIFT(state, gift) {
		state.gift = gift;
	},
	REFRESHROOM(state, room) {
		state.room = room;
	},
	SUBSCRIBE(state, focus) {
		state.judgeSub = focus;
	},
	UNSUBSCRIBE(state, focus) {
		state.judgeSub = focus;
	},
	REFRESHBALANCE(state, balance) {
		state.user.balance = balance;
	},
	REFRESHLIVECODE(state, live) {
		state.livestate = live;
	},
	REFRESHUSERINFO(state, user) {
		state.user = _.merge({}, state.user, user);
	}
}

export default new Vuex.Store({
	state,
	mutations
})