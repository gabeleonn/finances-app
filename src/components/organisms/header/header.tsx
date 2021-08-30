import { useState, useEffect } from 'react';
import { Box } from '@/components/molecules/box';
import theme from '@/utils/theme';
import { HeaderWrapper } from './styles';
import { getPercentage } from '@/utils/functions';
import { Text } from '@/components/atoms/text';
import { useRefresh } from '@/contexts/refresh';

interface IStats {
  ins: number;
  outs: number;
  essentials: number;
  personal: number;
  investments: number;
}

export function Header(): JSX.Element {
  const [stats, setStats] = useState<IStats>({
    ins: 0,
    outs: 0,
    essentials: 0,
    personal: 0,
    investments: 0,
  });
  const { update } = useRefresh();

  useEffect(() => {
    fetch('/api/stats', { method: 'GET' }).then(raw => {
      raw.json().then(response => {
        setStats(response);
      });
    });
  }, [update]);

  const getEssentialsPercentage = () => {
    const result = Number(
      (getPercentage(stats.ins, stats.essentials) / 0.5).toPrecision(2)
    );
    if (Number.isNaN(result) || !Number.isFinite(result)) {
      return 0;
    }
    return result;
  };

  const getPersonalPercentage = () => {
    const result = Number(
      (getPercentage(stats.ins, stats.personal) / 0.3).toPrecision(2)
    );
    if (Number.isNaN(result) || !Number.isFinite(result)) {
      return 0;
    }
    return result;
  };

  const getInvestmentsPercentage = () => {
    const result = Number(
      (getPercentage(stats.ins, stats.investments) / 0.2).toPrecision(2)
    );
    if (Number.isNaN(result) || !Number.isFinite(result)) {
      return 0;
    }
    return result;
  };

  return (
    <HeaderWrapper>
      <div className="boxes">
        <Box
          title="Essênciais (50%)"
          percentage={getEssentialsPercentage()}
          info="Transporte, alimentação, moradia, estudo, saúde, etc."
        />
        <Box
          title="Pessoais (30%)"
          percentage={getPersonalPercentage()}
          info="Jantares, shopping, cinema, assinaturas, etc."
        />
        <Box
          title="Poupar (20%)"
          percentage={getInvestmentsPercentage()}
          info="Objetivos, emergências e investimentos"
        />
      </div>
      <Text
        text={`R$ ${stats.ins - stats.outs}`}
        color={theme.colors.moss600}
        size={theme.sizes['3md']}
      />
    </HeaderWrapper>
  );
}
