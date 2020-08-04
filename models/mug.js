const client = require('./client');

module.exports = class Mug {

    static async findAll(){
        try {
            const result = await client.query('SELECT * FROM get_mugs()');
            return result.rows;
            
        } catch (error) {
            console.log('error:', error)
            
        }
    }

    static async findOne(mugId) {
        const result = await client.query('SELECT * FROM get_mugs() WHERE id = $1',[mugId]);
        return result.rows;
    }


    async save() {
        const result = await client.query('SELECT * FROM new_mug($1)',
        [
            this
        ]
        );

        this.id = result.rows[0].id;
    }

    //voir pour la passer en static
    async use() {
        const result = await client.query('SELECT * FROM use_mug($1)',
        [this.id]
        );

        return result.rows[0];
    }

    async clean() {
        const result = await client.query('SELECT * FROM clean_mug($1)',
        [this.id]
        );

        return result.rows[0];
    }
}