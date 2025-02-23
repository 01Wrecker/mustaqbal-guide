import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function StudentOrientationApp() {
  const [interests, setInterests] = useState("");
  const [skills, setSkills] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleGenerateRecommendations = () => {
    // Simulated recommendations
    const data = [
      { title: "Ingénieur Logiciel", description: "Idéal pour les passionnés de programmation." },
      { title: "Designer UX/UI", description: "Parfait pour ceux qui aiment le design et l'expérience utilisateur." },
      { title: "Data Scientist", description: "Un choix judicieux pour ceux qui aiment les mathématiques et l’analyse de données." },
    ];
    setRecommendations(data);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Orientation Étudiante</h1>
      <Input placeholder="Vos centres d’intérêt" value={interests} onChange={(e) => setInterests(e.target.value)} className="mb-2" />
      <Input placeholder="Vos compétences" value={skills} onChange={(e) => setSkills(e.target.value)} className="mb-4" />
      <Button onClick={handleGenerateRecommendations}>Obtenir des recommandations</Button>
      <div className="mt-6">
        {recommendations.map((rec, index) => (
          <Card key={index} className="mb-4">
            <CardContent>
              <h2 className="text-lg font-semibold">{rec.title}</h2>
              <p>{rec.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
