const colors = {
    purple_1: '#2a3142',
    purple_2: '#36394c',
    purple_3: '#252735',
    purple_4: '#0d0e13',

    grey_1: '#c1c1c1',
}

const withAnimation = (property) =>`
    transition: ${property} 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`

export { colors, withAnimation }
