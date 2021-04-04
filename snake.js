class Snake {
    constructor() {
        this. len = 1
        this.body = []
        this.body[0] = createVector(floor(w/2), floor(h/2))
        this.xdir = 0
        this.ydiry = 0
    }

    setDir(x, y) {
        this.xdir = x
        this.ydiry = y
    } 

    grow() {
        let head = this.body[this.body.length-1].copy()
        this.len++
        this.body.push(head)
    }

    endGame() {
        let x = this.body[this.body.length-1].x
        let y = this.body[this.body.length-1].y

        if(x > w - 1 || x < 0 || y > h - 1 || y < 0) {
            return true
        }

        for (let i = 0; i < this.body.length-1; i++) {
            let part = this.body[i]
            if (part.x == x && part.y == y) {
                return true
            }
        }
        return false

    }

    eat(food) {
        let x = this.body[this.body.length-1].x
        let y = this.body[this.body.length-1].y
        if(x == food.x && y == food.y) {
            this.grow()
            return true
        }
        return false
    }

    update() {
        let head = this.body[this.body.length-1].copy()
        this.body.shift()
        head.x += this.xdir
        head.y += this.ydiry
        this.body.push(head)

    }

    render() {

        for (let i = 0; i < this.body.length; i++) {

            noStroke()
            fill(0)
            rect(this.body[i].x, this.body[i].y, 1, 1)
        }

    }
}