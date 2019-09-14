import { observable } from 'mobx'
class Why {
    @observable list: any = []
    getlist() {
        console.log(this, '/////////////////////')
    }
}

export default Why
