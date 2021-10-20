export const AU_IN_KILOMETERS = 149587870
export function conversion(distance){
    return (distance * AU_IN_KILOMETERS).toFixed(2)
}
