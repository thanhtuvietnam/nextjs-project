'use client';
import React from 'react';
import { useParams } from 'next/navigation';

function TheLoai() {
  const { slug } = useParams();
  return <div>TheLoai: {slug}</div>;
}

export default TheLoai;
