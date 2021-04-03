
const app = Vue.createApp({

    data() {
        return {
            firstName: 'Ahmad',
            lastName: 'Albab',
            email: 'aabab@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },

    methods: {
        async getUser() {

            const resp=await fetch('https://randomuser.me/api')
            const {results} = await resp.json()

            console.log(results, results[0])

            this.firstName= results[0].name.first,
            this.lastName= results[0].name.last,
            this.email= results[0].email,
            this.gender= results[0].gender,
            this.picture=  results[0].picture.large
        },
    },
})

app.mount('#app')