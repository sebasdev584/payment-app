import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const payload = await request.json();

    if (payload.payload.titularName == "ERROR") {
      throw new Error("Error al realizar el pago");
    }

    return Response.json({
      status: "Success",
      message: "Pago realizado correctamente",
      data: {
        reference_id:
          Math.floor(Math.random() * (999999999 - 10000000000 + 1)) +
          10000000000,
      },
    });
  } catch (error: any) {
    return new Response(error.message, {
      status: 400,
    });
  }
};
