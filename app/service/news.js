const Service = require('egg').Service

class NewsService extends Service {
	async list(page = 1) {
		const { serverUrl, pageSize } = this.config.news

		const { data } = await this.ctx.curl(`${serverUrl}/topics?page=${page}&limit=${pageSize*(page-1)}`, {
			dataType: 'json'
		})
		const topicList = data.data
		return topicList
	}
}

module.exports = NewsService