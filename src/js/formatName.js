export default function(user = defaultName) {
    return `${user.firstName} ${user.lastName}`;
}
    
const defaultName = {
    firstName: 'leborn',
    lastName: 'james'
}