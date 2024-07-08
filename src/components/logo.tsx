import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image width={50} height={50} src="/logo.svg" alt="petsoft logo" />
    </Link>
  );
}