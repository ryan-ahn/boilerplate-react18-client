import styled from 'styled-components';
import { IMainProps } from '../../interface/props';

export default function index({ title }: IMainProps) {
  return <Wrapper>{title}</Wrapper>;
}

const Wrapper = styled.div``;
