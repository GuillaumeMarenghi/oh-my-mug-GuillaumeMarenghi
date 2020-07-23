const client = require('./client');

module.exports = class Mug {

    static async findAll(){
        const result = await client.query('SELECT * FROM get_mugs()');
        return result.rows;
    }

    static async findOne(mugId) {
        const result = await client.query('SELECT * FROM get_mugs() WHERE id = $1',[mugId]);
        return result.rows;
    }


    async save() {
        const result = await client.query('SELECT * FROM new_mug($1, $2, $3)',
        [
            this.label,
            this.capacity,
            this.description
        ]
        );

        this.id = result.rows[0].id;
    }

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