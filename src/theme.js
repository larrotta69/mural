const colors = {
    purple: '#36394c',
}

const withAnimation = (property) =>`
    transition: ${property} 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`

export { colors, withAnimation }
