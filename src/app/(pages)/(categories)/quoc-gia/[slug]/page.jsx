'use client';
import React from 'react';
import { useParams } from 'next/navigation';
function QuocGia() {
  const { slug } = useParams();
  return <div>QuocGia: {slug}</div>;
}

export default QuocGia;
