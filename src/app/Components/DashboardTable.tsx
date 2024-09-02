"use client";
import useSWR from "swr";

interface DataResponse {
  Date: string;
  "Utilisateurs Actifs": number;
  Ventes: number;
  Revenus: string;
  "Nouveaux Inscrits": number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DashboardTable() {
  const { data, error } = useSWR<DataResponse[]>("/api/exportExcel", fetcher);

  console.log("Données récupérées:", data);

  if (error) return <div>Erreur de chargement...</div>;
  if (!data) return <div>Chargement...</div>;

  if (!Array.isArray(data)) {
    return <div>Les données ne sont pas au format attendu.</div>;
  }

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th>Date</th>
          <th>Utilisateurs Actifs</th>
          <th>Ventes</th>
          <th>Revenus</th>
          <th>Nouveaux Inscrits</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.Date}</td>
            <td>{row["Utilisateurs Actifs"]}</td>
            <td>{row.Ventes}</td>
            <td>{row.Revenus}</td>
            <td>{row["Nouveaux Inscrits"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
