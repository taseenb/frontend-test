import React from 'react'
import LoadingAnimation from './LoadingAnimation'

import '../../styles/components/shared/LoadingAnimation.sass'

export default { title: 'LoadingAnimation' }

export const basic = () => <LoadingAnimation show />
export const withContainer = () => <LoadingAnimation show withContainer />
export const fullscreen = () => <LoadingAnimation show fullscreen />
export const large = () => <LoadingAnimation show size={128} radius={64} />
export const small = () => <LoadingAnimation show size={32} radius={16} />
export const alt1 = () => <LoadingAnimation show deg={180} />
export const alt2 = () => <LoadingAnimation show deg={270} />
export const alt3 = () => <LoadingAnimation show deg={45} />
