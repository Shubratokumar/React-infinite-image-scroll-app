import React from 'react';
import  styled  from 'styled-components';

const Loading = styled.div`
text-align: center;
@keyframes ldio-mr3gmr920vk {
   0% { transform: translate(12px,80px) scale(0); }
  25% { transform: translate(12px,80px) scale(0); }
  50% { transform: translate(12px,80px) scale(1); }
  75% { transform: translate(80px,80px) scale(1); }
 100% { transform: translate(148px,80px) scale(1); }
}
@keyframes ldio-mr3gmr920vk-r {
   0% { transform: translate(148px,80px) scale(1); }
 100% { transform: translate(148px,80px) scale(0); }
}
@keyframes ldio-mr3gmr920vk-c {
   0% { background: #93dbe9 }
  25% { background: #3b4368 }
  50% { background: #5e6fa3 }
  75% { background: #689cc5 }
 100% { background: #93dbe9 }
}
.ldio-mr3gmr920vk div {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  transform: translate(80px,80px) scale(1);
  background: #93dbe9;
  animation: ldio-mr3gmr920vk 1s infinite cubic-bezier(0,0.5,0.5,1);
}
.ldio-mr3gmr920vk div:nth-child(1) {
  background: #689cc5;
  transform: translate(148px,80px) scale(1);
  animation: ldio-mr3gmr920vk-r 0.25s infinite cubic-bezier(0,0.5,0.5,1), ldio-mr3gmr920vk-c 1s infinite step-start;
}.ldio-mr3gmr920vk div:nth-child(2) {
  animation-delay: -0.25s;
  background: #93dbe9;
}.ldio-mr3gmr920vk div:nth-child(3) {
  animation-delay: -0.5s;
  background: #689cc5;
}.ldio-mr3gmr920vk div:nth-child(4) {
  animation-delay: -0.75s;
  background: #5e6fa3;
}.ldio-mr3gmr920vk div:nth-child(5) {
  animation-delay: -1s;
  background: #3b4368;
}
.loadingio-spinner-ellipsis-9x1tpm4e0y {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #fff;
}
.ldio-mr3gmr920vk {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-mr3gmr920vk div { box-sizing: content-box; }
`;

const Loader = () => {
    return (
        <Loading>
            <div class="loadingio-spinner-ellipsis-9x1tpm4e0y"><div class="ldio-mr3gmr920vk">
            <div></div><div></div><div></div><div></div><div></div>
            </div></div>
        </Loading>
    );
};

export default Loader;