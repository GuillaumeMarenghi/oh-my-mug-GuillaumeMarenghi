const client = require('./client');

module.exports = class Mug {

    static async findAll(){
        const result = await client.query('SELECT * FROM get_mugs()');
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
}