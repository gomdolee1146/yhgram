const board = {
    state: [
        {
            title: '제목영역 텍스트',
            content: '본문영역 텍스트',
        },
        {
            title: '제목영역 텍스트2',
            content: '본문영역 텍스트2',
        }
    ],
    getters: {},
    mutations: {
        toSubmitContent(state, payload) {
            state = payload
            // state.title = payload.title
            // state.content = payload.content
        }
    },
    actions: {}
};

export default board;