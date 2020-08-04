import React from 'react'
import Stars from './Stars'

import '../../styles/components/shared/Stars.sass'

export default { title: 'Stars' }

export const rating0 = () => <Stars rating={0} />
export const rating05 = () => <Stars rating={0.5} />
export const rating1 = () => <Stars rating={1} />
export const rating15 = () => <Stars rating={1.5} />
export const rating2 = () => <Stars rating={2} />
export const rating25 = () => <Stars rating={2.5} />
export const rating3 = () => <Stars rating={3} />
export const rating35 = () => <Stars rating={3.5} />
export const rating4 = () => <Stars rating={4} />
export const rating45 = () => <Stars rating={4.5} />
export const rating5 = () => <Stars rating={5} />
