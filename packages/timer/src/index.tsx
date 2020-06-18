import React, { Component } from 'react';

export interface TimerProps {
  start: number;
}

interface TimerState {
  currentTime: number;
}

export default class Timer extends Component<TimerProps, TimerState> {
  constructor(props: TimerProps) {
    super(props);
    this.state = {
      currentTime: props.start
    }
    window.setInterval(() => {
      this.setState(previousState => ({ currentTime: previousState.currentTime - 1 }));
    }, 1000)
  }

  render() {
    return (
      <div>{this.state.currentTime}</div>
    )
  }
}

