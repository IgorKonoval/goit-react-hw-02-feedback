import React from 'react';
import { List } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, feedback }) => {
  return (
    <List>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positiv feedback: {feedback}%</li>
    </List>
  );
};
