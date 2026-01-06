export default async function handler(req, res) {
  res.status(200).json({
    name: "cvsm-azure-cli-vercel",
    version: "1.0.0",
    status: "active",
    description: "CV SM Azure CLI MCP Server"
  });
}
