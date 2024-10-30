'use client';

import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Grid, GridCol, Image, Title } from "@mantine/core";


export default function Login() {
  const { user, isLoading } = useUser(); // useUser returns user data if logged in
  const router = useRouter();



  useEffect(() => {
    if (!isLoading && user) {
      // Redirect if user is logged in
      router.push("/dashboard");
    }
  }, [user, isLoading, router]);

  // Display loading state or login page content
  if (isLoading) return <p>Loading...</p>;

  return (
    <Grid
      style={{
        // backgroundColor: "#009a80",
        height: 500,
        width: 700,
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#009a80",
        display: "flex",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 100,
        marginBottom: 100,
      }}
    >

      <GridCol span={12}>
        <Image
          src="nmbu_green.png"
          style={{ display: "flex", margin: "auto", width: 170, height: 170 }}
          alt="logo"
        />
      </GridCol>

      <GridCol span={12} style={{ textAlign: "center", paddingTop: 30, paddingBottom: 40 }}>
        <Title style={{ color: "#009a80" }} fw={800}>Kutrivsel</Title>
        <Title style={{ color: "#009a80" }} fw={800}>WelCow</Title>
      </GridCol>

      <GridCol span={12}>
        <Button
          size="md"
          style={{
            justifyContent: "center",
            width: 250,
            display: "flex",
            margin: "auto",
          }}
          component="a"
          href="/api/auth/login"
        >
          LOGIN
        </Button>
      </GridCol>

    </Grid>
  );
}
