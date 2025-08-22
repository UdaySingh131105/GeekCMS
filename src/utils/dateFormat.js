export default function DateFormat(date) {
    if(date instanceof Date)
        return new Date(date).toLocaleDateString('en-IN', {day: 'numeric', month: 'short', year: 'numeric'})
    else return "Date not Found";
}