import { Component } from 'react';
export interface TimerProps {
    start: number;
}
interface TimerState {
    currentTime: number;
}
export default class Timer extends Component<TimerProps, TimerState> {
    constructor(props: TimerProps);
    render(): any;
}
export {};
