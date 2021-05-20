import {Select} from './select/select'
import './select/style.scss'


const select = new Select('#select', {
    placeholder: 'Please select technology',
    // selectedId: '4',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Angular'},
        {id: '3', value: 'Vue'},
        {id: '4', value: 'React Native'},
        {id: '5', value: 'Next'},
        {id: '6', value: 'Nest'}
    ],
    onSelect(item) {
        console.log('Selected Item', item)
    }
})

const button = document.querySelector('#actions')
button.addEventListener('click', (event) => {
    const typeOfButton = event.target.dataset.type

    switch (typeOfButton) {
        case 'open':
            select.open()
            break
        case 'set':
            select.select('5')
            break
        case 'clear':
            select.clear()
            break
        case 'destroy':
            select.destroy()
            break
    }
})