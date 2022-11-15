class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url){
        this._url = url
    }
    async get() {
        return fetch(this._url)
        .then(res => res.json())
        .then(res => res.data)
        .catch(err => console.log('an errror occurs', err))
    }
}

class RecipesApi extends Api {
    constructor(url) {
        super(url)
    }
    async getRecipes() {
        return await this.get()
    }
}