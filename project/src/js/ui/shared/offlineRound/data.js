import { oppositeColor } from '../../../utils';
import i18n from '../../../i18n';


const standardVariant = {
  key: 'standard',
  name: 'Standard',
  shortName: 'STD',
  title: 'Standard rules of chess (FIDE)'
};

export default function data(cfg) {

  cfg = cfg || {};
  cfg.variant = cfg.variant || standardVariant;
  cfg.color = cfg.color || 'white';
  cfg.fen = cfg.fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  cfg.player = cfg.player || 'white';

  return {
    game: {
      offline: true,
      variant: cfg.variant,
      initialFen: cfg.fen,
      fen: cfg.fen,
      player: cfg.player,
      status: {
        id: 20
      }
    },
    player: {
      color: cfg.color,
      username: i18n(cfg.color)
    },
    opponent: {
      color: oppositeColor(cfg.color),
      username: i18n(oppositeColor(cfg.color))
    },
    pref: {
      animationDuration: 300,
      highlight: true,
      destination: true,
      centerPiece: cfg.pref && cfg.pref.centerPiece || false
    }
  };
}
