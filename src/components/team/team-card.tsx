import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export function TeamCard({ name, role, image, bio }: TeamMemberProps) {
  return (
    <Card>
      <CardHeader className="text-center">
        <Avatar className="h-24 w-24 mx-auto mb-4">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{bio}</p>
      </CardContent>
    </Card>
  );
}